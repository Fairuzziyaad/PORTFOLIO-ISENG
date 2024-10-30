// Inisialisasi EmailJS
(function() {
    emailjs.init("bkQg3iitgYMlvJvB0");
})();

// Function untuk mengirim email
function sendEmail(e) {
    e.preventDefault();
    
    // Tampilkan loading saat mengirim
    Swal.fire({
        title: 'Mengirim pesan...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    });
    
    // Cek nilai sebelum dikirim
    console.log({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('pesan').value
    });
    
    // Gunakan emailjs.sendForm() sebagai alternatif
    emailjs.sendForm('service_v3tmz1u', 'template_ndz9gjs', '#contactForm')
        .then(function(response) {
            // Alert sukses
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Pesan Anda telah terkirim.',
                confirmButtonColor: '#28a745'
            });
            document.getElementById('contactForm').reset();
        }, function(error) {
            // Alert error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Gagal mengirim pesan. Silakan coba lagi.',
                confirmButtonColor: '#dc3545'
            });
            console.error('Error:', error);
        });
} 