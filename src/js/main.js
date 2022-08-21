/*
LOAD ALPINE
 */
import Alpine from "alpinejs";
window.Alpine = Alpine;

/*
LOAD TAILWIND
 */
import '/css/tw.css';

/*
LOAD CUSTOM CSS
 */
import '/css/style.css'

/*
LOAD ALPINE COMPONENTS
 */
import counter from './components/counter.js'






/*
INIT ALPINE COMPONENTS AND START
 */
Alpine.data('counter',counter)
Alpine.start()
