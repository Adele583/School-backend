// types/flutterwave-node-v3.d.ts
declare module 'flutterwave-node-v3' {
    interface Charge {
        tx_ref: string;
        amount: number;
        currency: string;
        redirect_url: string;
        payment_type: string;
        payment_plan?: string;
        [key: string]: any;
    }

    interface Response {
        status: string;
        message: string;
        data: any;
    }

    class Flutterwave {
        constructor(apiKey: string);
        Charge: {
            card: (details: Charge) => Promise<Response>;
            [key: string]: any;
        };
        [key: string]: any;
    }

    export default Flutterwave;
}
