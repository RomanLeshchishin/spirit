export interface IconProps{
    classBlockIcon:string,
    element: JSX.Element,
}
const Icon = ({classBlockIcon, element}: IconProps) => {
    return (
        <div className={classBlockIcon}>
            {element}
        </div>
    );
};

export default Icon;
