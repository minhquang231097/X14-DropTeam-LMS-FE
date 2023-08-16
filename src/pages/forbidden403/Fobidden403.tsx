import { useSpring, animated } from '@react-spring/web'

const Fobidden403 = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  })

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <animated.h1
        className='text-6xl font-bold text-red-500'
        style={props}
      >
        403
      </animated.h1>
      <animated.p
        className='text-2xl font-medium text-gray-500'
        style={props}
      >
        Forbidden
      </animated.p>
      <animated.div
        className='w-64 h-64 mt-8 rounded-full bg-gray-300'
        style={useSpring({
          from: { opacity: 0, scale: 0 },
          to: { opacity: 1, scale: 1 },
          delay: 1000,
          config: { duration: 1000 },
        })}
      >
        <svg
          viewBox='0 0 200 200'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M 50 50 L 150 150 M 50 150 L 150 50'
            stroke='red'
            strokeWidth='10'
            strokeLinecap='round'
          >
            <animate
              attributeName='stroke-dasharray'
              values='0 200;200 0'
              dur='2s'
              repeatCount='indefinite'
            />
          </path>
        </svg>
      </animated.div>
    </div>
  )
}

export default Fobidden403
