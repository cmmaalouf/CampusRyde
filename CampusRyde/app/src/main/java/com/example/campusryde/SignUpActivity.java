package com.example.campusryde;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

//import com.google.firebase.auth.FirebaseAuth;
//import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class SignUpActivity extends AppCompatActivity {

    //private FirebaseAuth mAuth;
private DatabaseReference mDatabase;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

       // mAuth = FirebaseAuth.getInstance();
    }



    public void toLogin(View view)
    {
        EditText emailText = findViewById(R.id.schoolEmail);
        String email = emailText.getText().toString();

        EditText fnameText = findViewById(R.id.firstName);
        String fname = fnameText.getText().toString();

        EditText lnameText = findViewById(R.id.lastName);
        String lname = lnameText.getText().toString();

        EditText passwordText = findViewById(R.id.password);
        String password = passwordText.getText().toString();

        mDatabase = FirebaseDatabase.getInstance().getReference();

        writeNewUser("skjfhsb", fname, lname, email, password);
        //this.finish();
    }

    private void writeNewUser(String userID, String fname, String lname, String email, String pass){
        User user = new User(fname, lname, email, pass);
        Log.w("working", user.email);
        mDatabase.child("users").child("-C-0hJFov9CQMv4ji4xJ").setValue(user);
    }

}

