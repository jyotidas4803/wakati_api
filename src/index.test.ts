import {describe, expect, test } from 'vitest'
import app from './index'

describe('Example', () => {
    test('GET /posts', async () => {
      const res = await app.request('/status')
      expect(res.status).toBe(200)
      expect(await res.json()).toEqual({ message: 'Wakati-API is active' });
  
    });
  });