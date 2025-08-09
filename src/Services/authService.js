const API_BASE_URL = 'https://learndrivebyus-backend.onrender.com';

class AuthService {
  login = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and user data
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

register = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

  // Logout
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // Get current user
  getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  // Get token
  getToken = () => {
    return localStorage.getItem('token');
  };

  // Check if user is authenticated
  isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  // Get user profile
  getUserProfile = async () => {
    try {
      const token = this.getToken();
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch profile');
      }

      return data;
    } catch (error) {
      console.error('Profile fetch error:', error);
      throw error;
    }
  };

  // Update user profile
  updateProfile = async (profileData) => {
    try {
      const token = this.getToken();
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      // Update local storage
      localStorage.setItem('user', JSON.stringify(data.user));

      return data;
    } catch (error) {
      console.error('Profile update error:', error);
      throw error;
    }
  };

  // Change password
  changePassword = async (passwordData) => {
    try {
      const token = this.getToken();
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/api/users/change-password`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passwordData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password');
      }

      return data;
    } catch (error) {
      console.error('Password change error:', error);
      throw error;
    }
  };
// Forgot password - send OTP to email
forgotPasswordRequest = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/forgotRequest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to send OTP');
    return data;
  } catch (error) {
    console.error('Forgot Password Request error:', error);
    throw error;
  }
};

// Reset password using OTP
resetPasswordWithOtp = async (resetData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/restetPassword`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resetData), // contains email, otp, newPassword
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to reset password');
    return data;
  } catch (error) {
    console.error('Reset Password error:', error);
    throw error;
  }
};
// Change old password
changeOldPassword = async (passwordData) => {
  try {
    const token = this.getToken();
    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetch(`${API_BASE_URL}/api/users/changeOldPassword`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(passwordData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to change old password');
    }

    return data;
  } catch (error) {
    console.error('Change Old Password error:', error);
    throw error;
  }
};

}
// Create and export a single instance
const authService = new AuthService();
export default authService;