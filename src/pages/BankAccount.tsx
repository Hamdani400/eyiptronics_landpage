import { CreditCard, Copy, Scan, Check } from 'lucide-react'

// hooks
import { useState } from 'react'

// assets
import qrisPict from '../assets/images/qris_eyip.jpg'

function BankAccount() {
    const [copied, setCopied] = useState(false)

    const accounts = [
        {
            bank: 'BCA',
            account_no: '553-504-0777',
            toClipboard: '5535040777'
        },
        {
            bank: 'Mandiri',
            account_no: '1760002740536',
            toClipboard: '1760002740536'
        },
        {
            bank: 'BRI',
            account_no: '0021-0114-8755-507',
            toClipboard: '002101148755507'
        },
        {
            bank: 'BTN',
            account_no: '3001-6100-3933-9',
            toClipboard: '3001610039339'
        },
        {
            bank: 'BLU',
            account_no: '0017-7035-2506',
            toClipboard: '001770352506'
        },
        {
            bank: 'Jago',
            account_no: '1086-6740-7831',
            toClipboard: '108667407831'
        },
    ]

    const accountsCard = accounts.map((item, index) => {
        return <div key={'account-number-' + index} className="flex items-center justify-between bg-black/40 rounded-lg px-4 py-1 xl:py-2 backdrop-filter backdrop-blur-sm mb-2">
            <div className="grid grid-cols-[25%_5%_85%] xl:grid-cols-[4vw_1vw_10vw] gap-4">
                <span className="text-[82%] xl:text-[1vw] font-mono font-bold text-teal-100">{item.bank}</span>
                <span className="text-[82%] xl:text-[1vw] font-mono font-bold text-teal-100">:</span>
                <span className="text-[82%] xl:text-[1vw] font-mono font-bold text-teal-100">{item.account_no}</span>
            </div>
            <button
                onClick={() => copyToClipboard(item.toClipboard)}
                className={`transition-all duration-200 bg-green-600 hover:bg-green-700 rounded-full p-2 text-white`}
                aria-label="Copy to clipboard"
            >
                <Copy className="w-4 h-4" />
            </button>
        </div>
    })

    const copyToClipboard = (numb: string) => {
        navigator.clipboard.writeText(numb)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <div className="min-h-screen w-screen flex items-center justify-center p-4 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-600 backdrop-blur-3xl bg-opacity-75">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-lg p-8 max-w-fit w-full relative">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-white">Nomor Rekening</h1>
                        <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center shadow-lg">
                            <CreditCard className="w-8 h-8 text-green-400" />
                        </div>
                    </div>
                    <p className="text-sm text-teal-100 mb-2 font-semibold">Salin nomor berikut</p>

                    {accountsCard}

                    <div className="flex flex-col items-center mb-1">
                        {copied && <div className='mb-2 animate-popFade py-1 px-2 rounded-md bg-cyan-950 flex items-center'>
                            <Check className='mr-2 w-[1rem] xl:w-[0.8vw]' /> <span className="font-medium text-xs text-white">Berhasil menyalin nomor rekening</span>
                        </div>}
                        <p className="mb-4 text-white font-bold text-xl">
                            a/n Erif Triandari
                        </p>
                        <div className="bg-gradient-to-br from-emerald-600 via-green-500 to-teal-600 backdrop-blur-3xl bg-opacity-75 p-4 rounded-2xl shadow-lg mb-4 w-fit transform hover:scale-105 transition-transform duration-200">
                            <img src={qrisPict} alt="Qris Image" className='w-[10rem] h-[10rem] xl:w-[10vw] xl:h-[10vw]' />
                        </div>
                        <p className="mb-4 text-white font-bold text-lg">
                            Eyiptronics
                        </p>
                        <p className="text-sm text-white flex items-center mb-2">
                            <Scan className="w-4 h-4 mr-2" />
                            Pindai untuk pembayaran menggunakan metode QRIS
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankAccount