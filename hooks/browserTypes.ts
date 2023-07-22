import { useEffect, useState } from 'react'

export const useBrowserTypes = () => {
    const [browserType, setBrowserType] = useState('')

    useEffect(() => {
        const userAgent = window.navigator.userAgent
        if (userAgent.indexOf('Chrome') > -1) {
            setBrowserType('Chrome')
        } else if (userAgent.indexOf('Firefox') > -1) {
            setBrowserType('Firefox')
        } else if (userAgent.indexOf('Safari') > -1) {
            setBrowserType('Safari')
        } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
            setBrowserType('IE')
        } else {
            setBrowserType('Unknown')
        }
    }, [])

    return {
        isChrome: browserType === 'Chrome',
        isFirefox: browserType === 'Firefox',
        isSafari: browserType === 'Safari',
        isIE: browserType === 'IE',
        isUnknown: browserType === 'Unknown',
    }
}

export default useBrowserTypes