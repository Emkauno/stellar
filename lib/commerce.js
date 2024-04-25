import CommerceSDK from '@chec/commerce.js';

const checPublicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY;

const commerce = new CommerceSDK(checPublicKey)

export default commerce