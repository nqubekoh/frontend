import React from 'react';
import styles from './footer.module.sass';

const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p>© 2025 MyBank. All rights reserved.</p>
                <p>Contact: support@mybank.com | 0800-123-456</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
