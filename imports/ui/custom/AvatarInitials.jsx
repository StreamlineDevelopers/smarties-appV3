import React from 'react';

const getInitials = (name) => {
    if (!name) return '';
    const words = name.trim().split(' ');
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
};

const AvatarInitials = ({ name, size = 40, bgColor = '#46a756', textColor = '#fff' }) => {
    const initials = getInitials(name);

    const styles = {
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: bgColor,
        color: textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: size / 2.5,
        userSelect: 'none',
    };

    return <div style={styles}>{initials}</div>;
};

export default AvatarInitials;
