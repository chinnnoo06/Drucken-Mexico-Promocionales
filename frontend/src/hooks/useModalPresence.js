"use client"

import { useEffect, useState } from "react"

export const useModalPresence = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isRendered, setIsRendered] = useState(false)

    const openModal = () => {
        setIsRendered(true)

        requestAnimationFrame(() => {
            setIsOpen(true)
        })
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        if (!isOpen && isRendered) {
            const timeout = setTimeout(() => {
                setIsRendered(false)
            }, 300)

            return () => clearTimeout(timeout)
        }
    }, [isOpen, isRendered, 300])

    return {
        isOpen,
        isRendered,
        openModal,
        closeModal
    }
}