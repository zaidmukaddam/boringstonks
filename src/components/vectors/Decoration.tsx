interface Props {
    width?: number
    height?: number
    className?: string
}

const Decoration = ({ width = 48, height = 48, className }: Props) => (
    <svg className={className} width={width} height={height} viewBox="0 0 174 73" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth={8} >
            <path d="M3,9.98925781 C10.2903646,5.3297526 19.5419922,3 30.7548828,3 C46.7223307,3 72.1523438,9.50683594 107.044922,22.5205078 C131.252813,29.8520542 147.009975,33.6010777 154.316406,33.7675781 C165.276053,34.0173288 170.425781,29.9883148 170.425781,23.9648437 C170.425781,17.9413727 167.175781,11.5800781 154.316406,11.5800781 C145.74349,11.5800781 126.302409,16.5143229 95.9931641,26.3828125 C60.8530501,39.8282405 38.3683496,47.3249853 28.5390625,48.8730469 C13.7951318,51.1951393 6.80371094,45.8632439 6.80371094,40.4296875 C6.80371094,34.9961311 9.38311226,29.6759095 28.5390625,28.8720703 C41.309696,28.3361775 56.0876908,31.2645629 72.8730469,37.6572266 C102.496094,51.2978516 122.860352,58.1181641 133.96582,58.1181641 C150.624023,58.1181641 148.308611,42.9595304 133.96582,42.4277344 C113.843755,41.6816568 89.4593152,50.6377114 60.8125,69.2958984"></path>
        </g>
    </svg>
)

export default Decoration