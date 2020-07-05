export interface IAppState {
    user: any;
}
  
export interface IAction<P> {
    type: string;
    payload?: P;
    error?: boolean;
    meta?: any;
}
