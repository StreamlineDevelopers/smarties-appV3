import React from "react";

export default function RequiredField(isRequired) {
    if (isRequired) {
        return <span className="required">*</span>;
    }
    return null;
}
