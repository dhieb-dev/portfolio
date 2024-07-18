import { useEffect, useRef } from "react";
import "../scss/components/loader.scss";

export default function Loader({getLoad}) {
	const loaderRef = useRef()
	useEffect(() => {
		const loader = loaderRef.current
		setTimeout(() => {
			loader.remove()
		}, 1000);
	}, [getLoad])
	return (
		<div ref={loaderRef} className={`container-loader ${getLoad ? 'loader-hidden' : null}`}>
			<div className="loader">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}