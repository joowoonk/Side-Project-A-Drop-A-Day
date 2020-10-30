import React, {useState, useEffect} from 'react'
import {Prompt} from "react-router-dom"

export default function useWarningClosingWhileTimeOn(message="Are you sure to close while you are focusing? Your timer won't be saved") {
    const [isFocusing, setIsFocusing] = useState(false)

    useEffect(() => {
        window.onbeforeunload = isFocusing && (()=> message);

        return () => {
            window.onbeforeunload = null;
        }
    }, [isFocusing])
    
    const routerPrompt = <Prompt when={isFocusing} message={message} />

    return [routerPrompt, ()=> setIsFocusing(true), ()=> setIsFocusing(false)]}
