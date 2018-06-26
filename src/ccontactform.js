import { connect } from "react-redux";
import { aGetContent } from '../../action/content.js';
import { aContent } from '../../action/sendmail.js';
import ContactForm from "./contactform.jsx";

const mapStateToProps = ( state ) => {
    return {
        advertList:state.advertlist
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onGetContent:() => {
            dispatch(aGetContent())
        },
        onSendContent:(uName, uMail, uMess) => {
            dispatch(aContent(uName, uMail, uMess))
         }

    };
};


const CContactForm = connect (
    mapStateToProps,
    mapDispatchToProps
)(ContactForm);

export default CContactForm;

