import React, { useRef } from 'react';
import { UploadManager, FileUpload } from "@tmq-justin/uploadmanager-client";
import FileUploadWatcher from '../../api/client/watchers/vapi/FileUploadWatcher';
import { useWatcher } from '../../api/client/Watcher2';
import moment from 'moment';

// Use FileUpload component
export const FileUploader = () => {
    const watcher = useRef(FileUploadWatcher).current;
    useWatcher(watcher);

    const refetchFiles = async (response) => {
        watcher.setValue("isLoadingFiles", true);
        await watcher.fetchFiles();
    }

    return (
        <FileUpload
            uploadManager={FileUploadWatcher.uploadManager}
            onUploadSuccess={(response) => refetchFiles(response)}
            onUploadError={(error) => console.log("Upload error", error)}
            metadata={{
                userId: watcher.UserId,
                createdAt: moment().valueOf(),
                updatedAt: moment().valueOf(),
            }}
        />
    );
};