$(document).ready(function($){
    $('#social-stream').dcSocialStream({
        feeds: {
            twitter: {
                id: '#LOSTISLES,#432CREW',
            },
            instagram: {
                id: '#LOSTISLES,#432CREW',
                accessToken: '9803372.e614fac.a75de7409eed4cd78cd41a78ba8a8af9',
                clientId: 'c4371ecd726b4fe69c5fa1ffd108052a',
                comments: 3,
                likes: 10,
            }
        },
        rotate: {
            delay: 0
        },
        wall: true,
        order: 'random',
        iconPath: 'images/dcsns-dark/',
        imagePath: 'images/dcsns-dark/'
    });
});
