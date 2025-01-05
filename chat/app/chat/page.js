'use client'

import { useEffect, useState } from "react"
import styles from "./page.module.css";

const Page = () => {
    const [ws, setWs] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        connect()
        return () => { disConnect() }
    }, [])

    const connect = () => {
        if (!ws) {
            let socket = new WebSocket('ws://localhost:8080')
            socket.onopen = () => console.log('open connection')

            socket.onmessage = (event) => console.log(event.data)

            setWs(socket)
        }
    }

    const disConnect = () => {
        if (ws) {
            ws.close()
            ws.onclose = () => {
                console.log('close connection')
            }
            setWs(null)
        }
    }

    const handelMessage = (event) => {
        const value = event.target.value
        setMessage(value)
    }

    const onSend = () => {
        if (ws) {
            ws.send(message)
        }

        setMessage('')
    }

    return (
        <div>
            <div className={styles.ctrl}>
                <button onClick={connect}>Connect</button>
                <button onClick={disConnect}>Disconnect</button>
                {ws && <span>connected</span>}
            </div>
            <div>
                <span>Message:</span>
                <input type="text" value={message} onChange={handelMessage} />
                <button onClick={onSend}>Send</button>
            </div>
        </div>
    )
}

export default Page