function copyText(button, textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerText;
        button.innerText = 'SUKSES';
        button.style.background = 'rgba(0, 230, 118, 0.2)';
        button.style.borderColor = '#00e676';
        button.style.color = '#00e676';

        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = '';
            button.style.borderColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
        alert('Gagal menyalin. Pastikan browser mengizinkan akses clipboard.');
    });
}

function openQris() {
    const modal = document.getElementById('qrisModal');
    modal.style.display = 'flex';
    // Mencegah scroll pada body saat modal terbuka
    document.body.style.overflow = 'hidden';
}

function closeQris() {
    const modal = document.getElementById('qrisModal');
    modal.style.display = 'none';
    // Mengembalikan scroll pada body
    document.body.style.overflow = 'auto';
}

// Menutup modal jika tombol ESC ditekan
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeQris();
    }
});
