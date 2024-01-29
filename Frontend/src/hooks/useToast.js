// SweetAlert2
import Swal from "sweetalert2";

// Colors, Imgs, Icons, etc.
import colors from "../utils/colors";

const useToast = ({ text, icon, styles }) => {
    Swal.fire({
        toast: true,
        titleText: text,
        icon: icon,
        background: colors.nav,
        color: '#f8f8f8',
        position: 'bottom-start',
        timer: 2000,
        padding: '10px',
        allowEscapeKey: false,
        showConfirmButton: false,
        ...styles,
    });
}

export default useToast;