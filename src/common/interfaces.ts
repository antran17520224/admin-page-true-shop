import { CompareFn, ColumnType } from 'antd/lib/table/interface';

export interface IError {
	code: string;
	message: string;
}

export interface IValidateMessage {
	// eslint-disable-next-line @typescript-eslint/ban-types
	[x: string]: string | object;
}
