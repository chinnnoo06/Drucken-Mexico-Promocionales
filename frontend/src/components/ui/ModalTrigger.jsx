"use client"

import { useModalPresence } from "../../hooks/useModalPresence"
import {  ReactNode } from "react"

export const ModalTrigger = ({ children, renderTrigger }) => {
    const { isOpen, isRendered, openModal, closeModal } = useModalPresence()

    return (
        <>
            {renderTrigger(openModal, isOpen)}

            {isRendered && children(closeModal, isOpen)}
        </>
    )
}