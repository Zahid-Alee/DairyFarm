import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Flex from 'antd/es/grid/col'; // Adjust the import as needed

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt50M = file.size / 1024 / 1024 < 50;
  if (!isLt50M) {
    message.error('Image must be smaller than 50MB!');
  }
  return isJpgOrPng && isLt50M;
};

const UploadImage = ({ defaultValue, setSelectedFile }) => {
  const [imageUrl, setImageUrl] = useState(defaultValue);

  useEffect(() => {
    setImageUrl(defaultValue);
  }, [defaultValue]);

  const handleChange = (info) => {
    if (info.file) {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
        setSelectedFile(info.file);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Thumbnail
      </div>
    </button>
  );

  return (
    <Flex gap="middle" wrap>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={() => Promise.resolve()}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </Flex>
  );
};

export default UploadImage;
