import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'first',
    loadComponent: () => import('./first-question/first-question.component').then((m) => m.FirstQuestionComponent),
  },
  {
    path: 'second',
    loadComponent: () => import('./second-question/second-question.component').then((m) => m.SecondQuestionComponent),
  },
  {
    path: 'third',
    loadComponent: () => import('./third-question/third-question.component').then((m) => m.ThirdQuestionComponent),
  },
  {
    path: 'fourth',
    loadComponent: () => import('./fourth-question/fourth-question.component').then((m) => m.FourthQuestionComponent),
  },
  {
    path: 'fifth',
    loadComponent: () => import('./fifth-question/fifth-question.component').then((m) => m.FifthQuestionComponent),
  },
  {
    path: 'completion',
    loadComponent: () => import('./completion/completion.component').then((m) => m.CompletionComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
