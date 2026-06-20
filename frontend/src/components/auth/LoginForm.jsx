import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useLoginForm } from '../../hooks/useLoginForm';
import { useEffect } from 'react';
import { input, label, primaryButton } from '../../helpers/StyleClasses';
import { FaUser, FaCircleExclamation, FaLock, FaEye, FaEyeSlash, FaRightToBracket } from 'react-icons/fa6';

export const LoginForm = () => {
    const navigate = useNavigate();
    const { formData, manageChange } = useForm({
        username: '',
        password: ''
    })

    const { passwordVisibility, sendForm, message, showPassword, formErrors, loading, success } = useLoginForm(formData);

    useEffect(() => {
        if (success) {
            navigate('/admin/catalogo/todos/1');
        }
    }, [success, navigate]);

    return (
        <div className='form-container flex flex-col justify-center items-center'>
            <div className='w-full'>
                {message && <p className="mb-2 text-red-600 text-center text-sm lg:text-base">{message}</p>}

                <form className='space-y-6 flex-1 flex flex-col' onSubmit={sendForm}>

                    <div className="flex-1 space-y-6">
                        <div className="form-group">
                            <label htmlFor="username" className={label}>
                                <FaUser className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" aria-hidden="true" />
                                Usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Escribe tu usuario"
                                className={input}
                                onChange={manageChange}
                                value={formData.username}
                            />
                            {formErrors.username && (
                                <span className="text-red-500 text-xs flex items-center mt-1">
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.username}
                                </span>
                            )}

                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className={label}>
                                <FaLock className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-2" aria-hidden="true" />
                                Contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Escribe tu contraseña"
                                    className={input}
                                    onChange={manageChange}
                                    value={formData.password}
                                />

                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-[#9F531B] hover:text-[#7C3E13]"
                                    onClick={passwordVisibility}
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    aria-pressed={showPassword}
                                >
                                    {showPassword ? <FaEyeSlash className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" /> : <FaEye className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />}
                                </button>
                            </div>
                            {formErrors.password && (
                                <span className="text-red-500 text-xs flex items-center mt-1">
                                    <FaCircleExclamation className="inline-block h-4 w-4 lg:h-5 lg:w-5 mr-1" />
                                    {formErrors.password}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-center pt-4'>
                        <button
                            type="submit"
                            className={`${primaryButton} w-full flex items-center justify-center gap-2`}
                        >
                            <FaRightToBracket className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />

                            {loading ? 'Cargando...' : 'Entrar'}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
