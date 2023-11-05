import React from 'react'

const ChatBody = ({ chat }) => {
    const aiStyle =
        "bg-white bg-opacity-40 backdrop-blue-lg dropshadow-md mr-auto"
    return (
        <div className="flex flex-col gap-4">
            {
                chat.map((message, i) => {
                    return (
                        <div key={i} className={`border border-slate-400 break-words bottom-2 rounded-xl self-end p-3 max-w-[80%] backdrop-blue-lg dropshadow-md ${message.sender === "ai" && aiStyle
                            }`}>
                            <pre className="whitespace-pre-wrap">
                                <span>{message.message}</span>
                            </pre>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChatBody
