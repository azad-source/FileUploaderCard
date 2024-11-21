import styles from './FileUploaderCard.module.scss';
import cx from 'clsx';
import React, { createRef } from 'react';
import {
  FileUploader,
  FileUploaderAttachedFile,
  FileUploaderRef,
} from '@skbkontur/react-ui';

interface IProps {
  isSizeError?: boolean;
  disabled?: boolean;
  accept?: string;
  cardSize?: number;
  onAttache: (files: FileUploaderAttachedFile[]) => void;
}

export const FileUploaderCard: React.FC<IProps> = ({
  // isSizeError = false,
  disabled = false,
  accept,
  cardSize = 140,
  onAttache,
}) => {
  const fileUploaderRef = createRef<FileUploaderRef>();

  const handleAttach = (files: FileUploaderAttachedFile[]) => {
    onAttache(files);
  };

  return (
    <div className={cx(styles.root, disabled && styles.root_disabled)}>
      <FileUploader
        multiple
        hideFiles
        accept={accept}
        disabled={disabled}
        ref={fileUploaderRef}
        style={{ width: cardSize, height: cardSize }}
        className={styles.fileUploader}
        onAttach={handleAttach}
      />
    </div>
  );
};
