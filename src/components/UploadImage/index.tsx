import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import * as React from 'react';
import { UploadProps } from 'antd/lib/upload';

interface IProps {
	imgAlt: string;
	uploadProps: UploadProps;
	imgUrlProps: string;
}
function getBase64(file: any) {
	const reader = new FileReader();
	if (file) {
		return new Promise((resolve, reject) => {
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
		});
	} else {
		return new Promise((resolve, reject) => {
			reader.onerror = (error) => reject(error);
		});
	}
}
function beforeUpload(file: File) {
	const typeFile = file.type.toLowerCase();
	file.name.toLowerCase();
	const isJpgOrPng = typeFile === 'image/jpeg' || typeFile === 'image/png';
	if (!isJpgOrPng) {
		message.error('Bạn chỉ có thể tải file có có định dạng JPG/PNG !');
	}
	const sizeFile = 1024;
	const isLt2M = file.size / sizeFile / sizeFile < 2;
	if (!isLt2M) {
		message.error('Kích thước ảnh phải nhỏ hơn 2MB !');
	}
	return isJpgOrPng && isLt2M;
}

export const UploadImage: React.FC<IProps> = ({ imgAlt, uploadProps, imgUrlProps }) => {
	const [state, setState] = React.useState<{ imgUrlState: string; loading: boolean }>({
		loading: false,
		imgUrlState: imgUrlProps,
	});

	React.useEffect(() => {
		setState({
			...state,
			imgUrlState: imgUrlProps,
		});
	}, [imgUrlProps]);

	const { loading, imgUrlState } = state;
	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Chọn ảnh</div>
		</div>
	);
	const handleChangeImage = (info: any) => {
		info.file.status = 'done';
		if (info.file.status === 'done') {
			setTimeout(() => {
				getBase64(info.file.originFileObj).then((result) => {
					setState({
						...state,
						imgUrlState: result as any,
						loading: false,
					});
				});
			}, 700);
			setState({
				...state,
				loading: true,
			});
		}
	};
	return (
		<React.Fragment>
			<Upload {...uploadProps} onChange={handleChangeImage} beforeUpload={beforeUpload}>
				{imgUrlState ? (
					<div className="wrapper-image">
						<img src={imgUrlState} alt={imgAlt} />
					</div>
				) : (
					uploadButton
				)}
			</Upload>
		</React.Fragment>
	);
};
