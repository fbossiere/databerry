import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import Alert from '@mui/joy/Alert';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@app/components/landing-page/Container';
import { RouteNames } from '@app/types';

export function HeroChatGPTPlugin() {
  return (
    <Container className="relative z-10 pt-20 pb-16 mb-12 text-center lg:pt-32">
      <img
        className="absolute left-0 object-contain bg-top opacity-60 -translate-y-1/4"
        src="https://nextsiders.vercel.app/_next/static/media/Hero.Gradient.0bce135c.svg"
        alt=""
      />
      <div className="relative z-10">
        <div className="mb-12 font-bold inline-flex flex-wrap items-center gap-2 rounded-md border border-neutral-800/50 bg-neutral-900/60 py-[5px] pr-5 pl-2 text-xs leading-[0] text-neutral-300 backdrop-blur transition-all duration-300 hover:bg-neutral-900/80 sm:rounded-full">
          <span className="flex items-center justify-center px-2 py-3 font-extrabold uppercase bg-indigo-500 rounded-full">
            <span>New</span>
          </span>
          Build a ChatGPT Plugin in minutes!
          <Link
            href="/#chatgpt-plugin"
            style={{ background: 'none' }}
            className="text-[10px]underline-offset-4 text-indigo-300 text-main-hover flex items-center gap-2 font-medium transition-all hover:underline"
          >
            Learn More{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="15" y1="16" x2="19" y2="12"></line>
              <line x1="15" y1="8" x2="19" y2="12"></line>
            </svg>
          </Link>
        </div>

        <Link href={RouteNames.CHAT_SITE}>
          {/* <Button sx={{borderRadius: 100, boxShadow: 'md', mb: 4}} size="sm" endDecorator={<ArrowForwardRoundedIcon />} variant='soft' color="success">✨ New: ChatGPT Bot trained on your website</Button> */}

          {/* <div className='inline-flex items-center justify-center max-w-2xl p-2 mx-auto mb-4 border-2 border-indigo-400 rounded-full bg-black/30'>
          <h2 className="text-xs font-semibold leading-none text-indigo-300 ">Open Source</h2>
        </div> */}
        </Link>

        {/* <Alert
          sx={{
            maxWidth: 'sm',
            mx: 'auto',
            zIndex: 10,
            mb: 8,
            mt: -8,
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
          startDecorator={
            <AutoAwesomeRoundedIcon
              sx={{ mt: '2px', mx: '4px' }}
              fontSize="xl2"
            />
          }
          color="success"
          variant="soft"
          // invertedColors
          zize="lg"

          // endDecorator={
          //   <IconButton variant="soft" size="sm" color={color}>
          //     <CloseRoundedIcon />
          //   </IconButton>
          // }
        >
          <div style={{width: '100%'}}>
            <Typography fontWeight="lg" mt={0.25}>
              <Typography fontWeight={'bold'}>New!</Typography> Build a ChatGPT Plugin in minutes
            </Typography>
            <Stack direction="row" alignItems={'center'}  width={'100%'}>
              <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                Connect custom data to ChatGPT!
              </Typography>

            <Link href="/#chatgpt-plugin" style={{marginLeft: 'auto'}}>
              <Button
                size="sm"
                variant="plain"
                endDecorator={<ArrowForwardRoundedIcon />}
                >
                Learn More
              </Button>
                </Link>
            </Stack>
          </div>
        </Alert> */}

        <h2 className="mb-4 text-2xl font-bold text-violet-300">
          Build Your Own
        </h2>
        <h1 className="max-w-lg mx-auto text-4xl font-bold !leading-snug tracking-tight text-center text-white whitespace-pre-wrap font-display sm:text-5xl sm:text-center">
          {/* {'Document Retrieval \nfor ChatGPT \nin minutes'} */}
          {/* {`Build Your Own\nChatGPT Trained On\nYour Custom Data`} */}
          {`ChatGPT Agent\nTrained On\nYour Custom Data`}
          {/* {`ChatGPT Plugin\nIn minutes\nWithout Code`} */}
        </h1>

        <a
          href="https://www.producthunt.com/posts/databerry-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-databerry&#0045;ai"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=394302&theme=light"
            alt="Databerry&#0046;ai - Build&#0032;a&#0032;ChatGPT&#0032;plugin&#0032;in&#0032;minutes | Product Hunt"
            style={{
              width: '250px',
              height: '54px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '1rem',
              marginBottom: '2rem',
            }}
          />
        </a>

        {/* <h2 className='max-w-2xl mx-auto mt-4 text-3xl font-bold tracking-tight text-white whitespace-pre-wrap font-display sm:text-5xl'>No-code required!</h2> */}

        <p className="max-w-sm mx-auto mt-6 text-lg tracking-tight text-gray-200 sm:max-w-lg">
          With our <strong className="text-violet-300">no-code platform</strong>
          , you can create a{' '}
          <strong className="text-violet-300">custom AI chatbot</strong> trained
          on your data in seconds. Streamline customer support, onboard new team
          members, and more!
          {/* <ul className='mx-auto text-left list-disc'>
            <li>Connect custom data to ChatGPT</li>
            <li>Connect custom data to ChatGPT</li>
          </ul> */}
        </p>

        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          justifyContent={'center'}
          gap={2}
          mt={6}
        >
          <Link target="_blank" href={'https://app.databerry.ai/signin'}>
            <Button
              variant="solid"
              size="lg"
              // startDecorator={<RocketLaunchRounded />}
              sx={{ borderRadius: 100 }}
            >{`⚡️ Get Started Now`}</Button>
          </Link>
          <Link
            target="_blank"
            href={'https://calendly.com/databerry-georges/15min'}
          >
            <Button
              variant="outlined"
              size="lg"
              startDecorator={<PhoneRoundedIcon />}
              sx={{ borderRadius: 100 }}
            >
              Book a Call
            </Button>
          </Link>
        </Stack>
        <div className="flex justify-center mt-10 gap-x-6">
          {/* <Button target="_blank" href="https://app.databerry.ai/signin">Start Building</Button> */}
          {/* <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="flex-none w-3 h-3 fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3 text-gray-200">Watch video</span>
        </Button> */}
        </div>
        {/* <div className="mt-36 lg:mt-44">
        <p className="text-base text-gray-400 font-display">
          Trusted by by amazing companies
        </p>
        <ul
          role="list"
          className="flex items-center justify-center mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div> */}

        <div className="relative pt-16 overflow-hidden">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <iframe
              //   className="w-full h-[300px] rounded-2xl"
              //   width="560"
              className="w-full aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/Pa-cyPJzt5k"
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
