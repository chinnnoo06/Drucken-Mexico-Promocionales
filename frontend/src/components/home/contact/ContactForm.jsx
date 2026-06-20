import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { useContactForm } from '../../../hooks/useContactForm';
import { errorSpan, input, label, primaryButton } from '../../../helpers/StyleClasses';
import { motion } from "framer-motion"
import { slideInBottomInView } from "../../../helpers/Motion"

export const ContactForm = () => {
    const { formData, setFormData, manageChange } = useForm({
        name: '',
        tittle: '',
        message: ''
    })

    const { sendMessage, formErrors } = useContactForm(formData, setFormData);

    return (
        <motion.div {...slideInBottomInView} className='w-full md:w-1/2 py-8 md:pl-8 md:py-0'>
            <form className='space-y-7' onSubmit={sendMessage} noValidate>
                <div className="form-group">
                    <label htmlFor="name" className={label}>
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Escribe tu nombre"
                        onChange={manageChange}
                        value={formData.name}
                        className={input}
                    />
                    {formErrors.name && (
                        <span className={errorSpan}>
                            <i className="fas fa-exclamation-circle mr-1"></i>
                            {formErrors.name}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="tittle" className={label}>
                        Asunto
                    </label>
                    <input
                        type="text"
                        id="tittle"
                        name="tittle"
                        placeholder="¿En qué podemos ayudarte?"
                        onChange={manageChange}
                        value={formData.tittle}
                        className={input}
                    />
                    {formErrors.tittle && (
                        <span className={errorSpan}>
                            <i className="fas fa-exclamation-circle mr-1"></i>
                            {formErrors.tittle}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="message" className={label}>
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        onChange={manageChange}
                        value={formData.message}
                        className={`${input} resize-none`}
                    />
                    {formErrors.message && (
                        <span className={errorSpan}>
                            <i className="fas fa-exclamation-circle mr-1"></i>
                            {formErrors.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className={`${primaryButton} w-full flex items-center justify-center gap-2`}
                >
                    <i className="fab fa-whatsapp"></i>
                    Enviar por WhatsApp
                </button>
            </form>
        </motion.div>
    )
}
