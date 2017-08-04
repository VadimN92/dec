import { WordsComponent } from './components/words/words.component';
import { WordComponent } from './components/word/word.component';
import { WordModifyComponent } from './components/word-modify/word-modify.component';


export const routes = [
    {
        path: '',
        redirectTo: '/words',
        pathMatch: 'full'
    },
    {
        path: "words",
        children: [
            {
                path: '',
                component: WordsComponent
            },
            {
                path: 'create',
                component: WordModifyComponent
            },
            {
                path: ':id',
                component: WordComponent
            },
            {
                path: ':id/edit',
                component: WordModifyComponent
            }

        ]
    }
];