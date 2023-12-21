import { HttpInterceptorFn } from '@angular/common/http';

export const cartInterceptor: HttpInterceptorFn = (req, next) => {


  const token=localStorage.getItem("")
  return next(req);
};
