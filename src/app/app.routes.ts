import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ConstruccionComponent } from './pages/intranet/statics/construccion/construccion.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'construccion', component: ConstruccionComponent }
];
