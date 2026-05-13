import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  // 1. Grab your token (placeholder for now)
  const authToken = localStorage.getItem('auth_token');

  // 2. Clone the request to add the headers
  // We clone because the original request is immutable
  let authReq = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // If a token exists, add the Authorization header
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {})
    }
  });

  // 3. Pass the request to the next handler and catch errors on the way back
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Session expired. Redirecting to login...');
        // Clear local storage and send to login
        localStorage.clear();
        router.navigate(['/login']);
      }
      else if (error.status === 403) {
        console.error('Access denied. Redirecting to 403 page...');
        router.navigate(['/access-denied']);
      }

      return throwError(() => error);
    })
  );
};
