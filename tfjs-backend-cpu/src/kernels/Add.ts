/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Add, KernelConfig} from '@tensorflow/tfjs-core';

import {createSimpleBinaryKernelImpl} from '../utils/binary_impl';
import {binaryKernelFunc, createComplexBinaryKernelImpl} from '../utils/binary_utils';

export const addImpl = createSimpleBinaryKernelImpl(((a, b) => a + b));
export const addComplexImpl =
    createComplexBinaryKernelImpl(((aReal, aImag, bReal, bImag) => {
      return {real: aReal + bReal, imag: aImag + bImag};
    }));

export const add = binaryKernelFunc(Add, addImpl, addComplexImpl);

export const addConfig: KernelConfig = {
  kernelName: Add,
  backendName: 'cpu',
  kernelFunc: add
};
