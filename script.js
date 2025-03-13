javascript
function showContent(service) {
    var content = document.getElementById('content');
    switch (service) {
        case 'service1':
            content.innerHTML = '<h1>Service 1</h1><p>Details about Service 1...</p>';
            break;
        case 'service2':
            content.innerHTML = '<h1>Service 2</h1><p>Details about Service 2...</p>';
            break;
        case 'service3':
            content.innerHTML = '<h1>Service 3</h1><p>Details about Service 3...</p>';
            break;
        default:
            content.innerHTML = '<h1>Welcome to My Website!</h1><p>This is a simple web page created using Visual Studio Code.</p>';
    }
}