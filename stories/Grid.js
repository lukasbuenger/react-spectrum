/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

import {Grid, GridColumn, GridRow} from '../src/Grid';
import React from 'react';
import {storiesOf} from '@storybook/react';

var boxRow = {
  position: 'relative',
  boxSizing: 'border-box',
  minHeight: '2.25rem',
  marginBottom: '1em',
  background: 'rgba(41, 75, 105, 0.1)',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#294b69',
  borderRadius: '2px',
  border: '1px solid #6f9dc7',
  padding: '1rem'
};

var box = {
  position: 'relative',
  boxSizing: 'border-box',
  minHeight: '2.25rem',
  marginBottom: '1em',
  background: 'rgba(41, 75, 105, 0.1)',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#294b69',
  borderRadius: '2px',
  border: '1px solid #6f9dc7',
  padding: '1rem'
};

var boxNested = {
  position: 'relative',
  boxSizing: 'border-box',
  minHeight: '2.25rem',
  background: 'rgba(41, 75, 105, 0.1)',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#294b69',
  borderRadius: '2px',
  border: '1px solid #6f9dc7',
  padding: '1rem'
};

var boxFirst = {
  position: 'relative',
  boxSizing: 'border-box',
  minHeight: '2.25rem',
  background: 'rgba(41, 75, 105, 0.1)',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#294b69',
  borderRadius: '2px',
  border: '1px solid #6f9dc7',
  padding: '1rem'
};

var boxLarge = {
  position: 'relative',
  boxSizing: 'border-box',
  minHeight: '2.25rem',
  marginBottom: '1em',
  background: 'rgba(41, 75, 105, 0.1)',
  overflow: 'hidden',
  textAlign: 'center',
  color: '#294b69',
  borderRadius: '2px',
  border: '1px solid #6f9dc7',
  height: '8rem',
  padding: '1rem'
};
storiesOf('Grid', module)
  .add(
    'Fixed',
    () => (
      <Grid variant="fixed">
        <GridRow>
          <GridColumn size={[12, 3, 2, 1]}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={[6, 6, 8, 10]}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={[6, 3, 2, 1]}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={[12, 3, 2, 1]}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={[12, 9, 10, 11]}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={[10, 6, 8, 10]}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={[2, 6, 4, 2]}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Fluid',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={1}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={11}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={2}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={10}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={3}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={9}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={4}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={8}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={5}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={7}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={6}>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn size={6}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Offset',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={1} offsetSize={11}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={2} offsetSize={10}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={3} offsetSize={9}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={4} offsetSize={8}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={5} offsetSize={7}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={6} offsetSize={6}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={7} offsetSize={5}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={8} offsetSize={4}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={9} offsetSize={3}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={10} offsetSize={2}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn size={11} offsetSize={1}>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Auto Width',
    () => (
      <Grid>
        <GridRow>
          <GridColumn>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn>
            <div style={boxRow} />
          </GridColumn>
          <GridColumn>
            <div style={boxRow} />
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Nested Grids',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={7}>
            <div style={box}>
              <GridRow>
                <GridColumn size={9}>
                  <GridRow>
                    <GridColumn size={4}>
                      <div style={boxNested} />
                    </GridColumn>
                    <GridColumn size={8}>
                      <div style={boxNested} />
                    </GridColumn>
                  </GridRow>
                </GridColumn>
                <GridColumn size={3}>
                  <GridRow>
                    <GridColumn>
                      <div style={boxNested} />
                    </GridColumn>
                  </GridRow>
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>

          <GridColumn size={5}>
            <div style={box}>
              <GridRow>
                <GridColumn size={12}>
                  <GridRow>
                    <GridColumn size={6}>
                      <div style={boxNested} />
                    </GridColumn>
                    <GridColumn size={6}>
                      <div style={boxNested} />
                    </GridColumn>
                  </GridRow>
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Alignment-spectrum-grid-start',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow align={{xs: 'start', sm: 'start', md: 'start', lg: 'start', xl: 'start'}}>
                <GridColumn size={6}>
                  <div style={boxNested} />
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Alignment-spectrum-grid-center',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow align={{xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'center'}}>
                <GridColumn size={6}>
                  <div style={boxNested} />
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Alignment-spectrum-grid-end',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow align="end">
                <GridColumn size={6}>
                  <div style={boxNested} />
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Alignment-spectrum-grid-top',
    () => (
      <Grid>
        <GridRow valign="top">
          <GridColumn size={6}>
            <div style={boxLarge} />
          </GridColumn>
          <GridColumn size={6}>
            <div style={box} />
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Alignment-spectrum-grid-middle',
    () => (
      <Grid>
        <GridRow valign="middle">
          <GridColumn size={6}>
            <div style={boxLarge} />
          </GridColumn>
          <GridColumn size={6}>
            <div style={box} />
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Alignment-spectrum-grid-bottom',
    () => (
      <Grid>
        <GridRow valign="bottom">
          <GridColumn size={6}>
            <div style={boxLarge} />
          </GridColumn>
          <GridColumn size={6}>
            <div style={box} />
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Distribution-spectrum-grid-around',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow distribution="around">
                <GridColumn size={2}>
                  <div style={boxNested} />
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested} />
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested} />
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Distribution-spectrum-grid-between',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow distribution="between">
                <GridColumn size={2}>
                  <div style={boxNested} />
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested} />
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested} />
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Reordering-spectrum-grid-first',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow>
                <GridColumn size={2}>
                  <div style={boxFirst}>1</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>2</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>3</div>
                </GridColumn>
                <GridColumn size={2} first={[true, true, true, true, true]}>
                  <div style={boxFirst}>4</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>5</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>6</div>
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Reordering-spectrum-grid-last',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow>
                <GridColumn size={2} last={{xs: true, sm: true, md: true, lg: true, xl: true}}>
                  <div style={boxFirst}>1</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>2</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>3</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>4</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>5</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxFirst}>6</div>
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  )
  .add(
    'Reversing-spectrum-grid-reverse',
    () => (
      <Grid>
        <GridRow>
          <GridColumn size={12}>
            <div style={box}>
              <GridRow reverse>
                <GridColumn size={2}>
                  <div style={boxNested}>1</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested}>2</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested}>3</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested}>4</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested}>5</div>
                </GridColumn>
                <GridColumn size={2}>
                  <div style={boxNested}>6</div>
                </GridColumn>
              </GridRow>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  );
