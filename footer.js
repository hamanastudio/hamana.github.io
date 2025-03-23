document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-contact" style="text-align: center; font-family: 'Courier New', Courier, monospace; color: black;">
                <h3 style="font-weight: lighter; font-size: 18px;">Contact</h3>
                <p style="font-size: 14px;">
                    Email: <a href="mailto:hamanastudios@gmail.com" style="color: black; text-decoration: none;" onmouseover="this.style.color='gray'" onmouseout="this.style.color='black'">hamanastudios@gmail.com</a>
                </p>
                <p style="font-size: 14px;">Address: Tokyo, Japan</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(footer);
});
