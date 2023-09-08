'use client'
import styled from '@emotion/styled'

export const Container = styled.div`
  overflow: hidden;
  align-items: center;
  width: 100%;
  max-width: 340px;
  position: relative;
  padding: 1rem;
  box-shadow:
    var(--color-white) 0px 0px 10px 2px inset,
    var(--color-white) 0px 0px 10px 2px;
  border-radius: 20px;
  inset: -1px;
  background: linear-gradient(to top, var(--color-dark-semi), var(--color-white-semi));

  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 20px;
    padding: 1%.5;
    background: var(--color-white-semi);
  }
`

export const Title = styled.h2`
  margin: 0;
  padding: 1rem;
  color: var(--color-white);
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  text-align: center;
`

export const Username = styled.p`
  margin: 0;
  padding: 1rem;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  text-align: center;
`
export const BadgeContainer = styled.p`
  color: var(--color-white);
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: normal;
`

export const UserContainer = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-white);

`

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const TableText = styled.td`
  border: 0;
  display: flex;
  align-items: center;
  box-shadow: var(--color-white) 0px 0px 5px 1px;
  gap: 1em;
`
