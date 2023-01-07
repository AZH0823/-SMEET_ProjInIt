import Calendar from '../node_modules/v-calendar/lib/components/calendar.umd'
import DatePicker from '../node_modules/v-calendar/lib/components/date-picker.umd'

// Register components in your 'main.js'
Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)

// Or just use in separate component
export default {
    components: {
        Calendar,
        DatePicker
    }
}