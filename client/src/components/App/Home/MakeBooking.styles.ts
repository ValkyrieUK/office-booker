import styled from 'styled-components';

export default styled.div`
  ${(props) => props.theme.breakpoints.up('xs')} {
    padding: 2rem 2rem 2.4rem;
  }

  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 3rem 3rem 4rem;
  }

  > h2 {
    margin: 0 2rem 0 0;

    color: ${(props) => props.theme.palette.primary.main};
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 400;
  }

  > .change {
    margin: 0.4rem 0 0 0.2rem;

    font-size: 1.2rem;
    font-weight: bold;
  }

  ul {
    ${(props) => props.theme.breakpoints.up('xs')} {
      margin: 1.6rem 0 0;
    }

    ${(props) => props.theme.breakpoints.up('sm')} {
      margin: 2rem 0 0;
    }

    padding: 0 0 0 2rem;

    > li {
      color: ${(props) => props.theme.palette.secondary.main};
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 400;

      > span {
        color: ${(props) => props.theme.palette.primary.main};
        font-weight: bold;
      }
    }
  }

  > .bookings {
    max-width: 40rem;

    ${(props) => props.theme.breakpoints.up('xs')} {
      padding: 1.2rem 1.8rem 1.8rem;
      margin-top: 2.4rem;
    }

    ${(props) => props.theme.breakpoints.up('sm')} {
      padding: 1.2rem 2.8rem 2.8rem;
      margin-top: 3rem;
    }

    > .menu {
      display: flex;
      align-items: center;
      justify-content: center;

      > .back,
      > .forward {
        flex: 0 0 auto;

        .icon {
          font-size: 4rem;
        }
      }

      > .date {
        flex: 0 0 auto;

        padding: 0 2rem;

        text-align: center;

        > h3 {
          margin: 0;

          font-size: 2rem;
          color: ${(props) => props.theme.palette.primary.main};
        }
      }
    }

    > .details {
      display: flex;

      ${(props) => props.theme.breakpoints.only('xs')} {
        flex-wrap: wrap;
        justify-content: center;
      }

      ${(props) => props.theme.breakpoints.up('sm')} {
        justify-content: space-between;
      }

      margin: 0.8rem 0 0;
      padding: 0 2rem;

      > .quota {
        ${(props) => props.theme.breakpoints.only('xs')} {
          flex: 1 1 100%;
        }

        ${(props) => props.theme.breakpoints.up('sm')} {
          flex: 0 0 auto;
        }

        margin: 0;

        color: ${(props) => props.theme.palette.secondary.main};
        font-size: 1.4rem;
        text-align: center;

        > span {
          color: ${(props) => props.theme.palette.primary.main};
          font-size: 1.4rem;
          font-weight: bold;
        }
      }

      > .upcoming-bookings {
        ${(props) => props.theme.breakpoints.only('xs')} {
          flex: 1 1 100%;
        }

        ${(props) => props.theme.breakpoints.up('sm')} {
          flex: 0 0 auto;
        }

        margin: 0;

        > button {
          color: ${(props) => props.theme.palette.primary.main};
          font-weight: bold;
        }
      }
    }

    > .grid {
      margin-top: 1.8rem;

      > .row {
        display: flex;
        align-items: flex-start;

        ${(props) => props.theme.breakpoints.up('xs')} {
          padding: 1.2rem 1.8rem;
        }

        ${(props) => props.theme.breakpoints.up('sm')} {
          padding: 1.6rem 2rem;
        }

        background: #f5f5f5;

        &:not(:first-of-type) {
          margin-top: 0.8rem;
        }

        &[data-today='true'] {
          background: #efefef;
        }

        &[data-bookable='false'] {
          opacity: 0.5;
        }

        > .left {
          flex: 1 1 50%;

          > .date {
            margin: 0;
          }

          > button {
            margin-top: 0.5rem;
          }
        }

        > .right {
          flex: 1 1 50%;

          text-align: right;

          > p {
            margin: 0;

            &.booked {
              color: ${(props) => props.theme.palette.primary.main};
              font-size: 1.8rem;
              line-height: 1.8rem;
              font-weight: bold;
              text-transform: uppercase;
            }

            &.available {
              color: ${(props) => props.theme.palette.secondary.main};
              font-weight: bold;
            }
          }

          > button {
            margin-top: 2rem;

            color: ${(props) => props.theme.palette.secondary.main};
            font-size: 1.2rem;
            font-weight: bold;

            &.loading {
              color: ${(props) => props.theme.palette.text.disabled};
            }
          }
        }
      }
    }
  }
`;
