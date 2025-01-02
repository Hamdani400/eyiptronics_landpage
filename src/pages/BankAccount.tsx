import { CreditCard, Copy, Scan } from 'lucide-react'

function BankAccount() {
    let accounts = [
        {
            bank: 'BCA',
            account_no: '553-504-0777',
        },
        {
            bank: 'Mandiri',
            account_no: '1760002740536',
        },
        {
            bank: 'BRI',
            account_no: '0021-0114-8755-507',
        },
        {
            bank: 'BTN',
            account_no: '3001-6100-3933-9',
        },
        {
            bank: 'BLU',
            account_no: '0017-7035-2506',
        },
        {
            bank: 'Jago',
            account_no: '1086-6740-7831',
        },
    ]

    const accountsCard = accounts.map((item, index) => {
        return <div key={'account-number-' + index} className="flex items-center justify-between bg-indigo-900 bg-opacity-40 rounded-lg px-4 py-2 backdrop-filter backdrop-blur-sm mb-2">
            <div className="grid grid-cols-[4vw_1vw_12vw] gap-4">
                <span className="text-[1vw] font-mono font-bold text-teal-100">{item.bank}</span>
                <span className="text-[1vw] font-mono font-bold text-teal-100">:</span>
                <span className="text-[1vw] font-mono font-bold text-teal-100">{item.account_no}</span>
            </div>
            <button
                onClick={() => copyToClipboard(item.account_no)}
                className={`transition-all duration-200 'bg-indigo-500 hover:bg-indigo-600' rounded-full p-2`}
                aria-label="Copy to clipboard"
            >
                <Copy className="w-4 h-4 text-white" />
            </button>
        </div>
    })

    const copyToClipboard = (numb: string) => {
        try {
            navigator.clipboard.writeText(numb)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="min-h-screen w-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-700 via-indigo-700 to-purple-800">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-lg p-8 max-w-lg w-full">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-teal-200">Nomor Rekening</h1>
                        <div className="w-16 h-16 bg-indigo-400 rounded-full flex items-center justify-center shadow-lg">
                            <CreditCard className="w-8 h-8 text-indigo-900" />
                        </div>
                    </div>
                    <p className="text-sm text-teal-300 mb-2 font-semibold">Salin nomor berikut</p>

                    {accountsCard}
                </div>
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-gradient-to-r from-teal-500 to-indigo-500 p-4 rounded-2xl shadow-lg mb-4 transform hover:scale-105 transition-transform duration-200">

                    </div>
                    <p className="text-sm text-teal-200 flex items-center">
                        <Scan className="w-4 h-4 mr-2" />
                        Scan for quick and secure payment
                    </p>
                </div>
            </div>
        </>
    )
}

export default BankAccount