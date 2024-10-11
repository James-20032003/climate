document.querySelectorAll('.icon').forEach(icon => {  
    icon.addEventListener('click', function(event) {  
        // Optionally, you can track clicks or perform actions here  
        console.log('Icon clicked:', this.ariaLabel);  
    });  
});