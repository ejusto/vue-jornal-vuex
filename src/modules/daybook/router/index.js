
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component:() => import(/* "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue' ),
        },
        {
            path: ':id',
            name: 'entry',
            component:() => import(/* "daybook-no-entry" */ '@/modules/daybook/views/EntryView.vue' ),
        }
    ]
}