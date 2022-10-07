import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext('');


const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light')
    const [openSidebar, setOpenSidebar] = useState(false)
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const root = window.document.documentElement;
        if(theme === 'dark') {
            root.classList.remove('light')
            root.classList.add(theme)
        }else{
            root.classList.remove('dark')
            root.classList.add(theme)
        }
        
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, setTheme, openSidebar, setOpenSidebar }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider