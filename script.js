// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('show');
    this.innerHTML = document.getElementById('mainNav').classList.contains('show') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Form Submission (for contact page)
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        const consent = document.getElementById('consent').checked;
        
        // Simple validation
        if (!name || !email || !phone || !service || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!consent) {
            showNotification('You must agree to the Communication Consent, Terms & Conditions and Privacy Policy.', 'error');
            return;
        }
        
        // Show success notification
        showNotification(`Thank you ${name}! Your enquiry about ${getServiceName(service)} has been submitted. We'll contact you within one business day.`);
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Scroll to top of page
        document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
    });
}

// Modal functionality
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

// Function to open modal with content
function openModal(title, contentId) {
    if (modalOverlay) {
        modalTitle.textContent = title;
        const contentElement = document.getElementById(contentId);
        
        if (contentElement) {
            modalContent.innerHTML = contentElement.innerHTML;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
}

// Function to close modal
function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Terms & Conditions links
if (document.getElementById('termsLink')) {
    document.getElementById('termsLink').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Terms & Conditions', 'termsContent');
    });
}
if (document.getElementById('viewTerms')) {
    document.getElementById('viewTerms').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Terms & Conditions', 'termsContent');
    });
}
if (document.getElementById('footerTerms')) {
    document.getElementById('footerTerms').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Terms & Conditions', 'termsContent');
    });
}
if (document.getElementById('footerTerms2')) {
    document.getElementById('footerTerms2').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Terms & Conditions', 'termsContent');
    });
}

// Privacy Policy links
if (document.getElementById('privacyLink')) {
    document.getElementById('privacyLink').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Privacy Policy', 'privacyContent');
    });
}
if (document.getElementById('viewPrivacy')) {
    document.getElementById('viewPrivacy').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Privacy Policy', 'privacyContent');
    });
}
if (document.getElementById('footerPrivacy')) {
    document.getElementById('footerPrivacy').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Privacy Policy', 'privacyContent');
    });
}
if (document.getElementById('footerPrivacy2')) {
    document.getElementById('footerPrivacy2').addEventListener('click', function(e) {
        e.preventDefault();
        openModal('Privacy Policy', 'privacyContent');
    });
}

// Modal close button
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside content
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Back buttons from terms/privacy pages
if (document.getElementById('backFromTerms')) {
    document.getElementById('backFromTerms').addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    });
}
if (document.getElementById('backFromPrivacy')) {
    document.getElementById('backFromPrivacy').addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
    });
}

// Function to show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    if (notification) {
        const notificationText = document.getElementById('notificationText');
        
        notificationText.textContent = message;
        notification.className = 'notification';
        
        // Add appropriate class based on type
        if (type === 'error') {
            notification.classList.add('error');
            notification.innerHTML = '<i class="fas fa-exclamation-circle"></i> <span id="notificationText">' + message + '</span>';
        } else if (type === 'info') {
            notification.classList.add('info');
            notification.innerHTML = '<i class="fas fa-info-circle"></i> <span id="notificationText">' + message + '</span>';
        } else {
            notification.innerHTML = '<i class="fas fa-check-circle"></i> <span id="notificationText">' + message + '</span>';
        }
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
}

// Function to get service name from value
function getServiceName(value) {
    const services = {
        'home-loan': 'Home Loan',
        'personal-loan': 'Personal Loan',
        'business-funding': 'Business Funding',
        'financial-guidance': 'Financial Guidance',
        'investment-advice': 'Investment Advice',
        'other': 'Other Financial Service'
    };
    
    return services[value] || 'Financial Service';
}

// Add clickable effect to process steps
document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Form input effects
document.querySelectorAll('.form-control').forEach(input => {
    // Add focus effect
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    // Remove focus effect
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
    
    // Add validation styling on blur
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});