import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faGoogle,
    faFacebookF,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faLock, faUser, faGoogle, faFacebookF, faGithub);

export { FontAwesomeIcon };
